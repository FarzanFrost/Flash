package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
public class Folder {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger FolderID;

    private String Name;

    public Folder(){}

    public Folder(String name) {
        Name = name;
    }

    public BigInteger getFolderID() {
        return FolderID;
    }

    public void setFolderID(BigInteger folderID) {
        FolderID = folderID;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }
}
