
class A{

let y = 0
let x = 0
let z = 0

public drawCanvas (Xs: number, Ys: number, Zs: number, W: number, H: number) {
    y = Ys
    x = Xs
    z = Zs
    for (let index = 0; index < H; index++) {
        x = Xs
        for (let index = 0; index < W; index++) {
            blocks.fill(
            GREEN_TERRACOTTA,
            world(x, y, z),
            world(x + 127, y, z + 127),
            FillOperation.Replace
            )
            x += 128
        }
        z += 128
    }
    x += -1
    z += -1
    blocks.fill(
    BROWN_TERRACOTTA,
    world(Xs, Ys, Zs),
    world(Xs + 1, Ys, z),
    FillOperation.Replace
    )
    blocks.fill(
    BROWN_TERRACOTTA,
    world(x, Ys, Zs),
    world(x - 1, Ys, z),
    FillOperation.Replace
    )
    blocks.fill(
    BROWN_TERRACOTTA,
    world(Xs, Ys, Zs),
    world(x, Ys, Zs + 1),
    FillOperation.Replace
    )
    blocks.fill(
    BROWN_TERRACOTTA,
    world(Xs, Ys, z),
    world(x, Ys, z - 1),
    FillOperation.Replace
    )
}
public delCanvas (Xs: number, Ys: number, Zs: number, W: number, H: number) {
    y = Ys
    x = Xs
    z = Zs
    for (let index = 0; index < H; index++) {
        x = Xs
        for (let index = 0; index < W; index++) {
            blocks.fill(
            AIR,
            world(x, y, z),
            world(x + 127, y, z + 127),
            FillOperation.Replace
            )
            x += 128
        }
        z += 128
    }
}
}