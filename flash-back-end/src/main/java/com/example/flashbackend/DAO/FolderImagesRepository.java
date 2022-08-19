package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.FolderImages;
import com.example.flashbackend.Entity.FolderImagesCompositeKey;
import org.springframework.data.repository.CrudRepository;

public interface FolderImagesRepository extends CrudRepository<FolderImages , FolderImagesCompositeKey> {
}
