import { SubmitFeedbackUseCase } from "./SubmitFeedback-UseCase";

//spies

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit Feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "Type text",
        comment: "Comment text",
        screenshot: "data:image/png;base64açsdklçaskdçlkalçsdk",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Comment text",
        screenshot: "data:image/png;base64açsdklçaskdçlkalçsdk",
      })
    ).rejects.toThrow();

    expect(createFeedbackSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).not.toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "Type text",
        comment: "",
        screenshot: "data:image/png;base64açsdklçaskdçlkalçsdk",
      })
    ).rejects.toThrow();

    expect(createFeedbackSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).not.toHaveBeenCalled();
  });

  it("should not be able to submit a feedback with screenshot in a wrong format", async () => {
    await expect(
      submitFeedback.execute({
        type: "Type text",
        comment: "Comment text",
        screenshot: "Wrong format screenshot",
      })
    ).rejects.toThrow();

    expect(createFeedbackSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).not.toHaveBeenCalled();
  });
});
