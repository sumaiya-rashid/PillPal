from django.db import models

# Create your models here.
class Medications(models.Model):
    name = models.CharField(max_length=100)
    dosage = models.CharField(max_length=100)
    time = models.TimeField()
    start_date = models.DateField()
    end_date = models.DateField()
    notes = models.TextField(blank=True)

    def __str__(self):
        return self.name