package com.example.flashbackend.Entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
public class GalleryImages {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger ImageID;

    @ManyToOne
    @JoinColumn( name = "EventID" )
    private Event event;

    @ManyToMany
    @JoinTable( name = "FolderImages" , joinColumns = @JoinColumn( name = "ImageID") , inverseJoinColumns = @JoinColumn( name = "FolderID" ))
    private List<Folder> folders;

    public GalleryImages(){}

    public BigInteger getImageID() {
        return ImageID;
    }

    public void setImageID(BigInteger imageID) {
        ImageID = imageID;
    }
}
