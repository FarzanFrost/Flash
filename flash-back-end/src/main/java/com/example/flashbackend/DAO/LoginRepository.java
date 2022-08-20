package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Login;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LoginRepository extends CrudRepository< Login, String > {

//    List<Login> findAll(String e );

}
