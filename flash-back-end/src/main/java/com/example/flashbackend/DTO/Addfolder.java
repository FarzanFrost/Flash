package com.example.flashbackend.DTO;

public class Addfolder {

    public int getFolderID() {
        return folderID;
    }

    public int getEventID() {
        return EventID;
    }

    public String getName() {
        return Name;
    }

    public Addfolder(int folderID,int EventID,String Name) {
        this.folderID=folderID;
        this.EventID=EventID;
        this.Name=Name;

    }



    private int folderID;
    private int EventID;
    private String Name;

}
