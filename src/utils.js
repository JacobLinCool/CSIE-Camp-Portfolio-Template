export function open(url) {
    window.open(url, "_blank");
}

export function random_text(length = 32) {
    const dict = "abcdefghijklmnopqrstuvwxyz ";
    let text = "";
    for (let i = 0; i < length; i++) {
        text += dict[Math.floor(Math.random() * dict.length)];
    }
    return text;
}
