function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);

    function onMove(event) {
        const offSetX = event.pageX-event.target.offsetLeft;
        const percentageLeft=offSetX/event.target.clientWidth*100;
        document.getElementById('result').textContent=percentageLeft.toFixed(0)+'%';
    }
}