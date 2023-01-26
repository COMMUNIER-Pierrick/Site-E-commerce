module.exports = class Status{
    constructor(id, statusName) {
        this.id = id;
        this.statusName = statusName;
    };

    static StatusInsert(statusName) {
        return new Status(null, statusName);
    };

    static StatusUpdate(statusName) {
        return new Status(null, statusName);
    };
}