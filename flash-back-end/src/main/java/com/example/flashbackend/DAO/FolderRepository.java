package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Folder;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface FolderRepository extends CrudRepository<Folder , BigInteger> {
}
