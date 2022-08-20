package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Package;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.util.List;

public interface PackageRepository extends CrudRepository<Package , BigInteger> {

    @Override
    List<Package> findAll();

}
