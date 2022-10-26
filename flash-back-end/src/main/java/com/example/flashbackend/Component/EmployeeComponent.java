package com.example.flashbackend.Component;
import com.example.flashbackend.DAO.*;
import com.example.flashbackend.DTO.AddEvent;
import com.example.flashbackend.DTO.Addfolder;
import com.example.flashbackend.Entity.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

@Component
public class EmployeeComponent {

    @Autowired
    EventRepository eventRepository;
    FolderRepository folderRepository;

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

    public String AddFolder(Addfolder addfolder ){
        folderRepository.insertFolder( addfolder.getFolderID(),addfolder.getEventID(),addfolder.getName()  );
        return "done";
    }


}
