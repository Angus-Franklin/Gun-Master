class players{
    constructor(health, damage, speed, attack_speed, projectile_speed, element){ //initiating stats depending on their class
        this.health = health;
        this.damage = damage;
        this.speed = speed;
        this.attack_speed = attack_speed;
        this.projectile_speed = projectile_speed;
        this.element = element; //the actual html tag of the player's image
        this.hitbox = this.element.getBoundingClientRect(); //player's hitbox
    }
    
    run_forward(speed){
        //tilemap move left
    }

    run_backward(speed){
        //tilemapmove backward
    }
}