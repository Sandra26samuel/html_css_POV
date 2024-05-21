function downloadFile() {
    const fileUrl = 'docs/POV.docx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'POV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.getElementById('download').addEventListener('click', downloadFile);
