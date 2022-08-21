package com.example.flashbackend.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
//@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class,property = "imageID")
public class GalleryImages {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger ImageID;

    @ManyToOne
    @JoinColumn( name = "EventID" )
    @JsonIgnore
    private Event event;

    @ManyToMany
    @JoinTable( name = "FolderImages" , joinColumns = @JoinColumn( name = "ImageID") , inverseJoinColumns = @JoinColumn( name = "FolderID" ))
    @JsonIgnore
    private List<Folder> folders;

    public GalleryImages(){}

    public BigInteger getImageID() {
        return ImageID;
    }

    public void setImageID(BigInteger imageID) {
        ImageID = imageID;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public List<Folder> getFolders() {
        return folders;
    }

    public void setFolders(List<Folder> folders) {
        this.folders = folders;
    }
}
