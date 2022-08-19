package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Attendence;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.sql.Date;

public interface AttendenceRepository extends CrudRepository< Attendence , AttendenceRepository > {
}
