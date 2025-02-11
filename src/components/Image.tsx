import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button } from "@mui/material";
import { IconButton } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";
import ArticleIcon from "@mui/icons-material/Article";

const allowedFileTypes = [
  "image/png", "image/jpeg", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/plain", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"
];

const FileUploadPreview = () => {
  const [formDataState, setFormDataState] = useState({ docs: [] });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Simulating API call to fetch files
    const apiFiles = [
      { url: "http://cloudinary/dummydata", id: 6789454545 },
      { url: "https://dummy.data", id: 78454878 },
      { url: "https://dummy/data/jsondummy.pdf", id: 45878 },
    ];
    setFormDataState((prev) => ({ ...prev, docs: apiFiles }));
  }, []);

  const handleFileChange = (event) => {
    setErrorMessage(""); // Reset error message
    const selectedFiles = Array.from(event.target.files);
    const validFiles = [];
    
    selectedFiles.forEach((file) => {
      if (allowedFileTypes.includes(file.type)) {
        validFiles.push({ file, id: Math.random().toString(36).substr(2, 9) });
      } else {
        setErrorMessage("Incorrect file format. Supported formats: png, jpg, jpeg, pdf, doc, docx, xls, xlsx, txt, ppt, pptx");
      }
    });

    setFormDataState((prev) => ({ ...prev, docs: [...prev.docs, ...validFiles] }));
  };

  const handleRemoveFile = (id) => {
    setFormDataState((prev) => ({ ...prev, docs: prev.docs.filter((file) => file.id !== id) }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formDataState.docs.forEach((file) => {
      if (file.file) {
        formData.append("docs", file.file);
      } else {
        formData.append("docs", file.url);
      }
    });
    
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });
      
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      console.log("Files uploaded successfully");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const isImage = (file) => {
    if (file.file) {
      return file.file.type.startsWith("image");
    }
    return file.url.match(/.(jpeg|jpg|png)$/i);
  };

  const renderFileIcon = (file) => {
    return isImage(file) ? (
      <CardMedia
        component="img"
        image={file.file ? URL.createObjectURL(file.file) : file.url}
        alt="preview"
        style={{ width: "64px", height: "64px", objectFit: "cover", borderRadius: "4px" }}
      />
    ) : (
      <ArticleIcon style={{ fontSize: 40, marginRight: "8px", color: "gray" }} />
    );
  };

  return (
    <div style={{ padding: "16px", maxWidth: "100%", margin: "auto", background: "white", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
      <label style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", background: "#1976d2", color: "white", padding: "8px 16px", borderRadius: "4px", width: "fit-content" }}>
        <UploadFileIcon /> Upload Files
        <input
          type="file"
          accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.xls,.xlsx,.txt,.ppt,.pptx"
          multiple
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>

      {errorMessage && (
        <Typography color="error" style={{ marginTop: "8px" }}>{errorMessage}</Typography>
      )}
      {console.log("fromdAta",formDataState)}
      <Box mt={2}>
        <Grid container spacing={2}>
          {formDataState.docs.map((file) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={file.id}>
              <Card style={{ display: "flex", alignItems: "center", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}>
                {renderFileIcon(file)}
                <CardContent style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {file.file ? file.file.name : file.url}
                </CardContent>
                <IconButton onClick={() => handleRemoveFile(file.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: "16px" }}>
        Submit
      </Button>
    </div>
  );
};

export default FileUploadPreview;
