package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Folder;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.sql.Time;
import java.util.Date;

public interface FolderRepository extends CrudRepository<Folder , BigInteger> {


    @Modifying
    @Query( value = "INSERT INTO event (  EventID, Name) VALUES (  :eventID, :name );" , nativeQuery = true)
    @Transactional
    void insertFolder( @Param("eventID") int eventID , @Param("name") String name);
}


