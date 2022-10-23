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
import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface EventRepository extends JpaRepository<Event, BigInteger> {

    @Override
    List<Event> findAll();

    @Modifying
    @Query( value = "INSERT INTO event ( Status, AdvancedAmount, EventDate, StartTime, EndTime,  Address, Latitude, Longitude, ExtraPage, Category, Delivered, PackageID, CustomerID) VALUES ( :status, :advancedAmount, :eventDate, :startTime, :endTime, :address, :latitude, :longitude, :extraPage, :category, :delivered, :packageId, :customerId);" , nativeQuery = true)
    @Transactional
    void insertEvent(@Param("status") String status , @Param("advancedAmount") String advancedAmount , @Param("eventDate") Date eventDate, @Param("startTime") Time startTime, @Param("endTime") Time endTime, @Param("address") String address, @Param("latitude") String latitude, @Param("longitude") String longitude, @Param("extraPage") Integer extraPage, @Param("category") String category, @Param("delivered") Boolean delivered, @Param("packageId") BigInteger packageId, @Param("customerId") BigInteger customerId);

    @Modifying
    @Query( value = "UPDATE event SET Status = :status , AdvancedAmount = :advancedAmount, EventDate = :eventDate, StartTime = :startTime, EndTime = :endTime,  Address = :address, Latitude = :latitude, Longitude = :longitude, ExtraPage = :extraPage, Category = :category, Delivered = :delivered, PackageID = :packageId, CustomerID = :customerId WHERE EventID = :eventId;" , nativeQuery = true)
    @Transactional
    void updateEvent(@Param("status") String status , @Param("advancedAmount") String advancedAmount , @Param("eventDate") Date eventDate, @Param("startTime") Time startTime, @Param("endTime") Time endTime, @Param("address") String address, @Param("latitude") String latitude, @Param("longitude") String longitude, @Param("extraPage") Integer extraPage, @Param("category") String category, @Param("delivered") Boolean delivered, @Param("packageId") BigInteger packageId, @Param("customerId") BigInteger customerId);


//    @Override
//    Optional<Event> findById(String email);


    }

