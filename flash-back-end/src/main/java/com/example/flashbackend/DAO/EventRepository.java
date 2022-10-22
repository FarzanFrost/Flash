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
    @Query( value = "INSERT INTO event ( Status, AdvancedAmount, PackageID, CustomerID, EventDate, StartTime, EndTime, Address, Latitude, Longitude, ExtraPage, Category, Delivered) VALUES ( :status, :advancedAmount, :packageId, :customerId, :eventDate, :startTime, :endTime, :address, :latitude, :longitude, :extraPage, :category, :delivered);" , nativeQuery = true)
    @Transactional
    void insertEvent(@Param("status") String status , @Param("advancedAmount") Float advancedAmount , @Param("packageId") BigInteger packageId, @Param("customerId") BigInteger customerId, @Param("eventDate") Date eventDate, @Param("startTime") Time startTime, @Param("endTime") Time endTime, @Param("address") String address, @Param("latitude") String latitude, @Param("longitude") String longitude, @Param("extraPage") Integer extraPage, @Param("category") String category, @Param("delivered") Boolean delivered);


//    @Override
//    Optional<Event> findById(String email);


    }

