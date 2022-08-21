package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Attendance;
import com.example.flashbackend.Entity.AttendanceCompositeKey;
import org.springframework.data.repository.CrudRepository;

public interface AttendanceRepository extends CrudRepository<Attendance, AttendanceCompositeKey> {
}
