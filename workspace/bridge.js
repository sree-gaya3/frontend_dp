
// implementor
class Resource {
    snippet() {
        throw new Error('Abstract resource !!!');
    }
}

// abstraction
class View {
    constructor(resource) {
        this.resource = resource;
    }
    draw() {
        throw new Error('Abstract view !!!');
    }
}

class Album extends Resource {
    snippet() {
        return 'Album snippet';
    }
}
class Artist extends Resource {
    snippet() {
        return 'Artist snippet';
    }
}

class LongView extends View {
    constructor(resource) {
        super(resource);
    }
    draw() {
        return this.resource.snippet() + ' in long view';
    }
}
class ShortView extends View {
    constructor(resource) {
        super(resource);
    }
    draw() {
        return this.resource.snippet() + ' in short view';
    }
}

let longViewAlbum = new LongView(new Album());
console.log(longViewAlbum.draw());