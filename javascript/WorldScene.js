export default class WorldScene extends Phaser.Scene {
    constructor() {
        super('WorldScene');
    }

    preload() {
    
        this.load.tilemapTiledJSON('map', '/assets/world_map/world_map.json');
        
        this.load.image('building_tiles', '/assets/world_map/building_tiles-0.png');

        this.load.image('environment_tiles_1', '/assets/world_map/environment_tiles-0.png');

        this.load.image('environment_tiles_2', '/assets/world_map/environment_tiles2.png');

        this.load.image('ground_tiles_1', '/assets/world_map/ground_tile_set-0.png');

        this.load.image('ground_tiles_2', '/assets/world_map/ground_tile_set-1.png');

    }

    create() {

       
        const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
        
        const building_tiles = map.addTilesetImage('building_tiles-0', 'building_tiles');

        const environment_tiles_1 = map.addTilesetImage('environment_tiles-0', 'environment_tiles_1');

        const environment_tiles_2 = map.addTilesetImage('environment_tiles2', 'environment_tiles_2');

        const ground_tiles_1 = map.addTilesetImage('ground_tile_set-0', 'ground_tiles_1');

        const ground_tiles_2 = map.addTilesetImage('ground_tile_set-1', 'ground_tiles_2');

        const tiles = [ground_tiles_1, ground_tiles_2, environment_tiles_1, environment_tiles_2, building_tiles];

        map.createLayer('grass_land', tiles)
        map.createLayer('behind12', tiles)
        map.createLayer('land2', tiles)
        map.createLayer('behind11', tiles)
        map.createLayer('behind10', tiles)
        map.createLayer('behind9', tiles)
        map.createLayer('behind8', tiles)
        map.createLayer('rocks_behind7', tiles)
        map.createLayer('trees_behind6', tiles)
        map.createLayer('trees_behind5', tiles)
        map.createLayer('trees_behind4', tiles)
        map.createLayer('trees_behind3', tiles)
        map.createLayer('trees_behind2', tiles)
        map.createLayer('trees_behind1', tiles)
        map.createLayer('small_decor2', tiles)
        map.createLayer('buildings', tiles)
        map.createLayer('trees_front1', tiles)
        map.createLayer('small_decor1', tiles)
        map.createLayer('trees_front2', tiles)
        map.createLayer('trees_front3', tiles)
       
       
       
       
        // const layer1 = map.createLayer('layer_one', ground_tiles_1);

        // const layer2 = map.createLayer('layer_two', ground_tiles_2);
    
        // layer1.resizeWorld();
        // world.createLayer('Tile Layer 2');
        // world.createLayer('Tile Layer 3');
        // world.createLayer('Tile Layer 4');
    

    }
}