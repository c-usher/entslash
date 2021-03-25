class Hero extends Being {
    constructor(scene, x, y, textureKey) {
        super(scene, x, y, textureKey, 'Hero')

        const animsFrameRate = 8
        const anims = scene.anims
        
        anims.create({
            key: 'hero_up',
            frames: anims.generateFrameNumbers(this.textureKey, { start: 1, end: 3 }), frameRate = animsFrameRate, repeat: -1
        })

        anims.create({
            key: 'hero_down',
            frames: anims.generateFrameNumbers(this.textureKey, { start: 4, end: 6 }), frameRate = animsFrameRate, repeat: -1
        })

        anims.create({
            key: 'hero_left',
            frames: anims.generateFrameNumbers(this.textureKey, { start: 7, end: 9 }), frameRate = animsFrameRate, repeat: -1
        })

        anims.create({
            key: 'hero_right',
            frames: anims.generateFrameNumbers(this.textureKey, { start: 10, end: 12 }), frameRate = animsFrameRate, repeat: -1
        })
        // this.setFrame(this.idleFrame.down)
        this.idleFrame = {
            up: 3,
            down: 6,
            left: 9,
            right: 12,
        }
        this.setFrame(this.idleFrame.down)

        

    }
            update(){
            
            }
}