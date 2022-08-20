package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Login;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface LoginRepository extends CrudRepository< Login, String > {

    @Override
    List<Login> findAll();

    @Override
    Optional<Login> findById( String Email );

}
