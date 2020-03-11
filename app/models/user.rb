class User < ApplicationRecord

    validates :name, :lastname, :password_digest, :session_token, presence: true
    validates :name, :lastname, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :events,
    foreign_key: :user_id,
    class_name: :Event
    
    has_many :questions,
    foreign_key: :user_id,
    class_name: :Question



    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(16)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(16)
    end

end
