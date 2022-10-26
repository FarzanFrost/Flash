package com.example.flashbackend.DTO;

public class AddFolder {

    public int getFolderID() {
        return folderID;
    }

    public int getEventID() {
        return eventID;
    }

    public String getName() {
        return name;
    }

    public AddFolder(int folderID, int eventID, String name) {
        this.folderID=folderID;
        this.eventID=eventID;
        this.name=name;

    }



    private int folderID;
    private int eventID;
    private String name;

}
