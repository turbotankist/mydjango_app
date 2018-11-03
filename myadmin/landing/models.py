from django.db import models
from django.contrib import admin
from solo.models import SingletonModel


class Landpage(SingletonModel):
    about = models.TextField(default='')
    title = models.CharField(max_length=200,default='')
    phone = models.CharField(max_length=15,default='')
    address = models.TextField(default='')
    vk = models.CharField(max_length=30,default='')
    fb = models.CharField(max_length=30,default='')
    copyrights = models.TextField(default='')
    # news = 

    # def save(self):
    #     self.changed = timezone.now()
    #     self.save()

    # def __str__(self):
    #     return self.title
    def __unicode__(self):
        return u"Site Configuration"

    class Meta:
        verbose_name = "Landpage"
        verbose_name_plural = "Landpage"

class LandpageAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            'fields': ('title', 'about', 'phone', 'address', 'vk', 'fb')
        }),
        ('Advanced options', {
            'classes': ('collapse',),
            'fields': ('registration_required', 'template_name'),
        }),
    )