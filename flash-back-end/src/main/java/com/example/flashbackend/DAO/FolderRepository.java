package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.sql.Time;
import java.util.Date;
import java.util.List;

public interface FolderRepository extends JpaRepository<Folder , BigInteger> {


    @Modifying
    @Query( value = "INSERT INTO Folder (EventID,Name) VALUES (  :eventID, :name );" , nativeQuery = true)
    @Transactional
    void insertFolder( @Param("eventID") BigInteger eventID , @Param("name") String name);

    @Modifying
    @Query( value = "SELECT * FROM Folder WHERE EventID = :eventID" , nativeQuery = true)
    @Transactional
    List<Folder> findByEventId(@Param("eventID") BigInteger eventID);
}


