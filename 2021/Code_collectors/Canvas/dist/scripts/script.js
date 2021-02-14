(function()
{
  const path = () =>
  {
      canvas_function();
  }

  function canvas_function()
  {
    const canvas_block = document.querySelector(".canvas");
    const canvas = document.createElement('canvas');
    canvas_block.appendChild(canvas);
    canvas.width = 500;
    canvas.height = 400;
    const context = canvas.getContext('2d');
    console.log(context);
    context.beginPath();
    context.lineWidth = 15;
    context.strokeStyle = "green";
    context.moveTo(20, 75);
    context.lineTo(350, 275);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "purple";
    context.moveTo(400, 50);
    context.lineTo(20, 330);
    context.stroke();
  }

  window.addEventListener('DOMContentLoaded', () =>
  {
    path();
  });
})
()