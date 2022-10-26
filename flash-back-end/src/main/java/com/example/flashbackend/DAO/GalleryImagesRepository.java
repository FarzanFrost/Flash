package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.GalleryImages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.math.BigInteger;

public interface GalleryImagesRepository extends JpaRepository< GalleryImages , BigInteger > {

    @Modifying
    @Query( value = "INSERT INTO GalleryImages (EventID, ImageUrl) VALUES (  :eventID, :imageurl );" , nativeQuery = true)
    @Transactional
    void insertPhotos(@Param("eventID") BigInteger eventID , @Param("imageurl") String imageurl);
}
