import React from "react";

export const ContentDownloader = () => {
  /**
   * Downloads a file from a Blob object with a specified filename and content type.
   *
   * @param {Blob} blobData - The Blob data to download.
   * @param {string} filename - The name to give to the downloaded file.
   * @param {string} [contentType] - Optional content type for the Blob.
   */
  function downloadBlob(
    blobData,
    filename,
    contentType = "application/octet-stream"
  ) {
    // Set the type of the Blob if provided
    const blob = contentType
      ? new Blob([blobData], { type: contentType })
      : blobData;

    // Create a URL from the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element for downloading
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;

    // Append the anchor to the document body and trigger a click to download
    document.body.appendChild(a);
    a.click(); // Start the download

    // Clean up by removing the anchor and revoking the URL
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Free the memory used by the Blob URL
  }

  /**
   * Extracts the filename from a Content-Disposition-like string.
   *
   * @param {string} contentDisposition - The content disposition string.
   * @returns {string} The extracted filename or a default message if not found.
   */
  function extractFilename(contentDisposition) {
    // Regular expression to extract the filename
    const regex = /filename="([^"]+)"/;

    // Apply the regex to the input string to find the filename
    const matches = regex.exec(contentDisposition);

    // Return the filename if found, or a default message
    if (matches && matches[1]) {
      return matches[1]; // Extracted filename
    } else {
      return "file"; // Default message if filename is not found
    }
  }

  const BASE_URL = `https://7bnmx6hw-8080.inc1.devtunnels.ms`
  function handleLogin() {

    const token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJFQzI0MDUwOTE1MTRkNjAxIiwidXB0IjoxNzE1MjQ3ODk0MjY4LCJpYXQiOjE3MTUyNDc4OTQsImV4cCI6MTcxNTMzNDI0MH0.Lx_RMFwCHiya3NU8RnopfgPdJDoAlKrdT-J-Qjw91YE`;
    const excelId = `F240509144809682a`;
    const pdfId = `F2405091448d1af63`;
    const textId = `F2405091448ae1b77`;
    const wordId = `F2405091448c30899`;
    const imageId = `F2405091448593783`;

    const downloadUrl = `${BASE_URL}/api/exam/download/t/${imageId}`
    const addBeneficiaryUrl = `${BASE_URL}/api/c/add/beneficiary`

    axios({
      method: 'get',
      url: downloadUrl,
      responseType: 'arraybuffer',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      const contentDispositionValue = res.headers[`content-disposition`];
      const fileName = extractFilename(contentDispositionValue);

      const contentTypeValue = res.headers[`content-type`];

      downloadBlob(res.data, fileName, contentTypeValue);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <button
      onClick={() => {
        handleLogin();
      }}
    />
  );
};
