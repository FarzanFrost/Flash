package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Login;
import org.springframework.data.repository.CrudRepository;

public interface LoginRepository extends CrudRepository< Login, String > {
}
