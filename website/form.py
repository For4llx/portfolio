from django import forms
from .models import Contact


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = "__all__"
        error_css_class = "input--invalid"
        widgets = {
            "name": forms.TextInput(
                attrs={
                    "class": "input paragraph",
                    "placeholder": "NAME",
                    "id": "name",
                    "name": "name",
                }
            ),
            "email": forms.TextInput(
                attrs={
                    "class": "input paragraph",
                    "placeholder": "EMAIL",
                    "id": "email",
                    "name": "email",
                }
            ),
            "message": forms.Textarea(
                attrs={
                    "class": "input paragraph",
                    "placeholder": "MESSAGE",
                    "id": "message",
                    "name": "message",
                }
            ),
        }
