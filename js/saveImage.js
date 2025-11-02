function captureAndSave(element) {
    const dataType = element.getAttribute("data-form");
    const targetElement = document.getElementById('img-area');
    const width = document.getElementById("width-input").value;
    const height = document.getElementById("height-input").value;
    
    // --- 캔버스 렌더링 옵션 ---
    const options = {
        scale: 1, // 해상도 조절: 2로 설정하면 2배 크기로 렌더링되어 더 고화질이 됩니다.
        useCORS: true // 외부 이미지 사용 시 필수
    };

    html2canvas(targetElement, options).then(canvas => {

        let mimeType;

        if (dataType == "png"){
            mimeType = "image/png"
        } else if (dataType === "jpg" || dataType == "jpeg") {
            mimeType = "image/jpeg";
        }

        const dataURL = canvas.toDataURL(mimeType);

        // 저장 (다운로드) 로직
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `${width}X${height}_${dataType}.${dataType}`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}