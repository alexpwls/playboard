function setupSound() {
    const sound = [
        {id: 0, library: "Human sounds", slug: "human-sounds", sounds: ["clapping", "laugh", "booing", "cheering", "ahh", "ooh", "wow", "sigh"]},
        {id: 1, library: "Animal sounds", slug: "animal-sounds", sounds: ["cat", "cow", "donkey", "elephant", "horse", "lion", "pig"]},
        {id: 2, library: "Weapon sounds", slug: "weapon-sounds", sounds: ["revolver", "cannon"]}
    ];
    return sound;
}

export { setupSound };