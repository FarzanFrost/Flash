package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.GalleryImages;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface GalleryImagesRepository extends CrudRepository< GalleryImages , BigInteger > {
}
