package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Event;
import org.aspectj.internal.lang.annotation.ajcDeclareAnnotation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface EventRepository extends JpaRepository<Event, BigInteger> {

    @Override
    List<Event> findAll();

    @Modifying
    @Query( value = "INSERT INTO event ( Status, AdvancedAmount, PackageID, CustomerID, EventDate, StartTime, EndTime, Address, Latitude, Longitude, ExtraPage, Category, Delivered) VALUES ( :status, :advancedAmount, :packageId, :customerId, :eventDate, :startTime, :endTime, :address, :latitude, :longitude, :extraPage, :category, :delivered);" , nativeQuery = true)
    @Transactional
    void insertEvent(@Param("status") String status ,@Param("advancedAmount") Float advancedAmount ,@Param("packageId") BigInteger packageId );


//    @Override
//    Optional<Event> findById(String email);


    }

