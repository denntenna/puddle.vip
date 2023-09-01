function drawIsland(ctx, origin, radius, resolution, noise = 1) {
  let points = [];

  ctx.fillStyle = "rgb(200,155, 0)";
  // ctx.moveTo(origin.x, origin.y);
  ctx.font = "20px Georgia";

  //   for (var i = 1; i <= resolution; i++) {
  //     let angle = (8 * Math.PI) / i;
  //     let x = origin.x + Math.sin(angle) * radius + Math.random() * noise;
  //     let y = origin.y + Math.cos(angle) * radius + Math.random() * noise;
  //     points.push({ x, y });
  //     if (i == 0) {
  //       ctx.fillRect(x, y, 10, 10);
  //     } else {
  //       ctx.arcTo(points[i - 1].x, points[i - 1].y, x, y, 10);
  //       ctx.stroke();
  //     }
  //   }(
  ctx.beginPath();
  for (var i = 0; i <= resolution; i++) {
    // let angle = (8 * Math.PI) / i;
    let angle = (i / resolution) * 2 * Math.PI - Math.PI;
    let x = origin.x + Math.sin(angle) * radius + Math.random() * noise;
    let y = origin.y + Math.cos(angle) * radius + Math.random() * noise;

    points.push({ x, y });
    if (i == 0) {
      ctx.lineTo(x, y);
      //   ctx.fillRect(x, y, 10, 10);
    } else {
      ctx.lineTo(points[i - 1].x, points[i - 1].y, x, y, 10);
    }
    // ctx.fillText(i, x, y);
  }
  const len = points.length - 1;
  ctx.lineTo(points[len].x, points[len].y, points[0].x, points[0].y, 10);
  ctx.closePath();
  ctx.stroke();
}

function setup(width, height) {
  const canvas = document.getElementById("islands");
  const ctx = canvas.getContext("2d");
  if (ctx) {
    drawIsland(ctx, { x: width / 2, y: height / 2 }, 150, 100, 10);
    for (let i = 0; i < 25; i++) {
      drawIsland(
        ctx,
        { x: width * Math.random(), y: height * Math.random() },
        Math.random() * 50,
        25,
        2
      );
    }
  } else {
    // canvas-unsupported code here
    print("you don;t have canvas");
  }
}

export { setup };
