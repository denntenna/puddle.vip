function drawIsland(ctx, origin, radius, resolution, noise = 1) {
  let points = [];

  ctx.fillStyle = "rgb(200,155, 0)";
  ctx.moveTo(origin.x, origin.y);
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
      ctx.moveTo(x, y);
      //   ctx.fillRect(x, y, 10, 10);
    } else {
      ctx.arcTo(points[i - 1].x, points[i - 1].y, x, y, 10);
      ctx.stroke();
    }
    // ctx.fillText(i, x, y);
  }
  const len = points.length - 1;
  ctx.arcTo(points[len].x, points[len].y, points[0].x, points[0].y, 10);
  ctx.closePath();
  console.log(points);
}

function setup() {
  const canvas = document.getElementById("islands");
  const ctx = canvas.getContext("2d");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    drawIsland(ctx, { x: 400, y: 400 }, 250, 100, 2);
    drawIsland(ctx, { x: 50, y: 50 }, 50, 25, 2);
    drawIsland(ctx, { x: 25, y: 600 }, 20, 25, 2);
    // drawIsland(ctx, { x: 525, y: 45 }, 20, 25, 2);
    // drawIsland(ctx, { x: 425, y: 600 }, 20, 25, 2);
    drawIsland(ctx, { x: 625, y: 600 }, 25, 25, 2);
    drawIsland(ctx, { x: 720, y: 800 }, 90, 25, 2);
    // drawIsland(ctx, { x: 10, y: 10 }, 100, 50, 10);
    // drawIsland(ctx, { x: 150, y: 500 }, 100, 50, 10);
    // drawIsland(ctx, { x: 400, y: 400 }, 100, 50, 10);
  } else {
    // canvas-unsupported code here
    print("you don;t have canvas");
  }
}

export { setup };
