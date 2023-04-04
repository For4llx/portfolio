import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from .models import Skill, Project
from .form import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from portfolio.settings import DEBUG


class IndexView(TemplateView):
    """Display index"""

    template_name = "website/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["skills"] = Skill.objects.all()
        context["projects"] = Project.objects.all()
        context["contact_form"] = ContactForm()
        return context

    def post(self, request):
        if DEBUG:
            form = ContactForm(request.POST)

            if form.is_valid():
                name_clean_data = request.POST.get("name")
                message_clean_data = request.POST.get("message")
                sender_clean_data = request.POST.get("email")
                subject = f"Message de {name_clean_data} depuis le Portfolio"
                message = message_clean_data
                sender = sender_clean_data
                recipients = ["romeo.nobime@mailo.com"]
                try:
                    send_mail(subject, message, sender, recipients, fail_silently=True)
                    return HttpResponse("valid")
                except BadHeaderError:
                    return HttpResponse("invalid")
