package com.ssafy.green.service.firebase;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.auth.oauth2.GoogleCredentials;
import lombok.RequiredArgsConstructor;
import okhttp3.*;
import org.apache.http.HttpHeaders;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class FirebaseCloudMessageService {

    private final String API_URL = "https://fcm.googleapis.com/v1/projects/greenfingers-3cbec/messages:send";
    private final ObjectMapper objectMapper;

    public void sendMessageTo(String targetToken, String messageKey, String title, String body) throws IOException {
        String message = makeMessage(targetToken, messageKey, title, body);

        OkHttpClient client = new OkHttpClient();
        RequestBody requestBody
                = RequestBody.create(message, MediaType.get("application/json; charset=utf-8"));

        Request request = new Request.Builder()
                .url(API_URL)
                .post(requestBody)
                .addHeader(HttpHeaders.AUTHORIZATION, "Bearer " + getAccessToken())
                .addHeader(HttpHeaders.CONTENT_TYPE, "application/json;")
                .build();
        Response response = client.newCall(request)
                .execute();

        System.out.println(response.body().string());

    }

    private String makeMessage(String targetToken, String messageKey, String title, String body)
            throws JsonProcessingException {

        FcmMessage fcmMessage = FcmMessage.builder()
                .message(FcmMessage.Message.builder()
                        .token(targetToken)
                        .notification(FcmMessage.Notification.builder()
                                .title(title)
                                .body(body)
                                .image(null)
                                .build())
                        .data(FcmMessage.Data.builder()
                            .msgId(messageKey)
                            .build())
                        .build()
                )
                .validate_only(false)
                .build();

        return objectMapper.writeValueAsString(fcmMessage);
    }


    private String getAccessToken() throws IOException {
        String firebaseConfigPath = "firebase/greenfingers-3cbec-firebase-adminsdk-ckq86-7871b76c97.json";

        GoogleCredentials googleCredentials = GoogleCredentials
                .fromStream(new ClassPathResource(firebaseConfigPath).getInputStream())
                .createScoped(Arrays.asList("https://www.googleapis.com/auth/cloud-platform"));

        googleCredentials.refreshIfExpired();

        return googleCredentials.getAccessToken().getTokenValue();
    }
}
