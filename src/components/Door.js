//creating door class that will be used to create differents doors
class Door {
    doorNum;
    image;
    result;

    constructor(doorNum,image,result) {
        this.doorNum = doorNum;
        this.image = image;
        this.result = result;
    }
}

export default Door;