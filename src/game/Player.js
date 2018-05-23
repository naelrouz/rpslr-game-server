class Player {
    constructor(socket) {
        this.socket = socket;
        this.selectedGesture = null
        this.init()
    }
    init() {
        // Set default username
        this.socket.username = 'Anonymous';
    }
    get username() {
        return this.socket.username
    }
    get id() {
        return this.socket.id
    }
}

export default Player;