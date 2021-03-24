class Hero extends Being {
    constructor(scene, x, y, textureKey) {
        super(scene, x, y, textureKey, 'Hero')

        const animsFrameRate = 8
        
        this.scene.anims.create({
            key: 'hero_up',
            frames: this.anims.generateFrameNumbers(this.textureKey,{ start: 1, end: 3}), frameRate = animsFrameRate, repeat: -1
        })

        this.scene.anims.create({
            key: 'hero_down',
            frames: this.anims.generateFrameNumbers(this.textureKey,{ start: 4, end: 6}), frameRate = animsFrameRate, repeat: -1
        })

        this.scene.anims.create({
            key: 'hero_left',
            frames: this.anims.generateFrameNumbers(this.textureKey,{ start: 7, end: 9}), frameRate = animsFrameRate, repeat: -1
        })

        this.scene.anims.create({
            key: 'hero_right',
            frames: this.anims.generateFrameNumbers(this.textureKey, { start: 10, end: 12 }), frameRate = animsFrameRate, repeat: -1
        })

        

    }
}