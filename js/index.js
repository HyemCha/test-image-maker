// 배경색 선택(컬러피커)
function pickColor(e) {
    const pickedColor = e.getAttribute("data-hover");
    const imgArea = document.getElementById("img-area");

    imgArea.style.backgroundColor = pickedColor;
}

// 배경색 추가(5개까지)
function addColor(value) {
    const colorsLength = document.getElementsByClassName("sel-color").length;
    document.getElementById("img-area").style.backgroundColor = value;
    
    if (colorsLength == 5) {
        return;
    }

    const span = document.createElement('span');
    span.className = "sel-color";
    span.setAttribute("data-hover", value);
    // 1. addEventListener를 사용하여 oninput 이벤트 추가
    //    이벤트 리스너는 이벤트 객체(event)를 인자로 받습니다.
    span.addEventListener('click', (event) => {
        // event.target은 이벤트가 발생한 요소(여기서는 newInput 자체)를 가리킵니다.
        // pickColor 함수에 자기 자신(newInput)을 인자로 전달합니다.
        console.log(event)
        console.log(event.target)

        pickColor(event.target);
    });
    span.style.backgroundColor = value;
    document.getElementById("selected-colors").appendChild(span);
}

// 크기 입력
function resizeFont(target, parentWidth) {

    const newSize = parentWidth * 0.05;
    const clampedSize = Math.min(Math.max(newSize, 10), 30);

    target.style.fontSize = `${clampedSize}px`
}

function resizeObserve(parent) {
    const target = document.getElementById("date-text");

    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            const newWidth = entry.width;

            resizeFont(target, newWidth);
        }
    });

    observer.observe(parent)
}

function printSize(element) {
    const size = element;
    var imgArea = document.getElementById("img-area").style;

    if (size.name == "width") {
        const textWidth = document.getElementById("width-text");
        textWidth.textContent = size.value;
        imgArea.width = `${size.value}px`;

        if (imgArea.height <= size.value) {
            return;
        }

        const target = document.getElementsByClassName("text");
        console.log('target.item',target.item(0))
        const newSize = size.value * 0.2;
        const clampedSize = Math.min(Math.max(newSize, 10), 20);

        for (let t of target) {
            if (t.id == "size-text") {
                t.style.fontSize = `${clampedSize}px`
                continue;
            }
            t.style.fontSize = `${clampedSize * 0.9}px`
        }

    } else if (size.name == "height") {
        const textHeight = document.getElementById("height-text");
        textHeight.textContent = size.value;
        imgArea.height = `${size.value}px`;

        if (imgArea.width <= size.value) {
            return;
        }

        const target = document.getElementsByClassName("text");
        console.log('target.item',target.item(0))
        const newSize = size.value * 0.2;
        const clampedSize = Math.min(Math.max(newSize, 10), 30);

        for (let t of target) {
            if (t.id == "size-text") {
                t.style.fontSize = `${clampedSize}px`
                continue;
            }
            t.style.fontSize = `${clampedSize * 0.9}px`
        }

    }
}

// 용량 입력
function extractCapacity(element) {
    const capacity = element.value;
}

// 날짜 설정
function printDate(element) {
    const date = element.value;
    const dateField = document.getElementById("date-text");

    dateField.textContent = date;
}

// 문구 입력
function printText() {
    const writtenText = document.getElementById("text-input").value;
    const textField = document.getElementById("free-text");

    textField.textContent = writtenText;
}

// 저장하기