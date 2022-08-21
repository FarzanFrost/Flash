package com.example.flashbackend.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
//@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class,property = "folderID")
public class Folder {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger FolderID;

    private String Name;

    @ManyToOne
    @JoinColumn( name = "EventID" )
    @JsonIgnore
    private Event event;

    @ManyToMany
    @JoinTable( name = "FolderImages" , joinColumns = @JoinColumn( name = "FolderID") , inverseJoinColumns = @JoinColumn( name = "ImageID" ))
    @JsonIgnore
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
