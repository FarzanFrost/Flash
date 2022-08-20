package com.example.flashbackend.Entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
public class Folder {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger FolderID;

    private String Name;

    @ManyToOne
    @JoinColumn( name = "EventID" )
    private Event event;

    @ManyToMany
    @JoinTable( name = "FolderImages" , joinColumns = @JoinColumn( name = "FolderID") , inverseJoinColumns = @JoinColumn( name = "ImageID" ))
    private List<GalleryImages> galleryImages;

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

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public List<GalleryImages> getGalleryImages() {
        return galleryImages;
    }

    public void setGalleryImages(List<GalleryImages> galleryImages) {
        this.galleryImages = galleryImages;
    }
}
