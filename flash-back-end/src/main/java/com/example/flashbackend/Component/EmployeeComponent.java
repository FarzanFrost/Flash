package com.example.flashbackend.Component;
import com.example.flashbackend.DAO.*;
import com.example.flashbackend.DTO.*;
import com.example.flashbackend.Entity.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Component
public class EmployeeComponent {

    @Autowired
    EventRepository eventRepository;
    @Autowired
    FolderRepository folderRepository;

    @Autowired
    GalleryImagesRepository galleryImagesRepository;

    public List<Event>getEvents(){
        return eventRepository.findAll();
    }

//    public List<Event>getFilterEvent(String email){
//        return (List<Event>) eventRepository.findById(email).get();
//    }



//    public List<Event>getFilterEvents(Date date) {
//
//        return eventRepository.findByDate(date);
//    }

    public String addFolder(AddFolder addfolder){
        folderRepository.insertFolder( addfolder.getEventID() , addfolder.getName() );
        return "done";
    }

    public String addPhotos(AddPhotos addPhotos){
        System.out.println( "hi how are ;you " + addPhotos.getImageUrl() );
        galleryImagesRepository.insertPhotos( addPhotos.getEventID() , addPhotos.getImageUrl() );
        return "done";
    }

    public Optional<Event> getImagesByEventId(BigInteger eventId){

        return eventRepository.findById( eventId );

    }

}
