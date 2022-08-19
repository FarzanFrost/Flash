package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.math.BigInteger;

@Entity
@IdClass( FolderImagesCompositeKey.class )
public class FolderImages {

    @Id
    private BigInteger ImageID;

    @Id
    private BigInteger FolderID;

    public FolderImages(){}

    public FolderImages(BigInteger imageID, BigInteger folderID) {
        ImageID = imageID;
        FolderID = folderID;
    }

    public BigInteger getImageID() {
        return ImageID;
    }

    public void setImageID(BigInteger imageID) {
        ImageID = imageID;
    }

    public BigInteger getFolderID() {
        return FolderID;
    }

    public void setFolderID(BigInteger folderID) {
        FolderID = folderID;
    }
}
