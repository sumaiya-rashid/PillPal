from django.db import models

class Medication(models.Model):
    name = models.CharField(max_length=100)
    dosage = models.CharField(max_length=100)
    time = models.TimeField()
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} - {self.dosage} at {self.time}"